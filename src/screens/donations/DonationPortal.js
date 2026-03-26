// DonationPortal.js - Campaign Donation Portal
// Secure donation processing for citizens

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shapes } from '../../theme';

const PREDEFINED_AMOUNTS = [1000, 5000, 10000, 50000, 100000];

const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit/Debit Card', icon: 'card' },
  { id: 'bank', name: 'Bank Transfer', icon: 'business' },
  { id: 'ussd', name: 'USSD', icon: 'phone-portrait' },
  { id: 'wallet', name: 'Mobile Wallet', icon: 'wallet' },
];

const DONATION_TIERS = [
  {
    name: 'Supporter',
    minAmount: 1000,
    benefits: ['Newsletter subscription', 'Campaign updates'],
    color: '#22c55e',
  },
  {
    name: 'Advocate',
    minAmount: 10000,
    benefits: ['All Supporter benefits', 'Event invitations', 'Campaign merchandise'],
    color: '#3b82f6',
  },
  {
    name: 'Champion',
    minAmount: 50000,
    benefits: ['All Advocate benefits', 'VIP event access', 'Direct updates from candidate'],
    color: '#8b5cf6',
  },
  {
    name: 'Patron',
    minAmount: 100000,
    benefits: ['All Champion benefits', 'Private dinners', 'Advisory council membership'],
    color: '#f59e0b',
  },
];

export default function DonationPortal() {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isAnonymous: false,
    wantReceipt: true,
  });

  const getTier = (donationAmount) => {
    const num = parseInt(donationAmount) || 0;
    return DONATION_TIERS.slice().reverse().find((tier) => num >= tier.minAmount) || null;
  };

  const currentTier = getTier(amount || customAmount);

  const handleAmountSelect = (amt) => {
    setAmount(amt.toString());
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value);
    setAmount('');
  };

  const renderStep1 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Select Donation Amount</Text>
      <Text style={styles.stepDescription}>
        Your contribution helps us reach more voters and build a better future.
      </Text>

      {/* Predefined Amounts */}
      <View style={styles.amountGrid}>
        {PREDEFINED_AMOUNTS.map((amt) => (
          <TouchableOpacity
            key={amt}
            style={[
              styles.amountButton,
              amount === amt.toString() && styles.amountButtonActive,
            ]}
            onPress={() => handleAmountSelect(amt)}
          >
            <Text
              style={[
                styles.amountButtonText,
                amount === amt.toString() && styles.amountButtonTextActive,
              ]}
            >
              ₦{amt.toLocaleString()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Custom Amount */}
      <View style={styles.customAmountContainer}>
        <Text style={styles.customAmountLabel}>Or enter custom amount:</Text>
        <View style={styles.customAmountInput}>
          <Text style={styles.currencySymbol}>₦</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="0"
            keyboardType="number-pad"
            value={customAmount}
            onChangeText={handleCustomAmountChange}
          />
        </View>
      </View>

      {/* Tier Display */}
      {currentTier && (
        <View style={[styles.tierCard, { borderColor: currentTier.color }]}>
          <View style={styles.tierHeader}>
            <Text style={[styles.tierName, { color: currentTier.color }]}>
              {currentTier.name} Tier
            </Text>
            <Ionicons name="star" size={20} color={currentTier.color} />
          </View>
          <Text style={styles.tierBenefitsTitle}>Benefits:</Text>
          {currentTier.benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitRow}>
              <Ionicons name="checkmark-circle" size={16} color={currentTier.color} />
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>
      )}

      <TouchableOpacity
        style={[
          styles.continueButton,
          !(amount || customAmount) && styles.continueButtonDisabled,
        ]}
        disabled={!(amount || customAmount)}
        onPress={() => setStep(2)}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Payment Method</Text>
      <Text style={styles.stepDescription}>
        Choose your preferred payment method. All transactions are secure and encrypted.
      </Text>

      <View style={styles.paymentMethods}>
        {PAYMENT_METHODS.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.methodCard,
              selectedMethod === method.id && styles.methodCardActive,
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <Ionicons
              name={method.icon}
              size={28}
              color={selectedMethod === method.id ? colors.primary : colors.outline}
            />
            <Text
              style={[
                styles.methodName,
                selectedMethod === method.id && styles.methodNameActive,
              ]}
            >
              {method.name}
            </Text>
            {selectedMethod === method.id && (
              <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.donationSummary}>
        <Text style={styles.summaryTitle}>Donation Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Amount:</Text>
          <Text style={styles.summaryValue}>
            ₦{parseInt(amount || customAmount).toLocaleString()}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tier:</Text>
          <Text style={[styles.summaryValue, { color: currentTier?.color }]}>
            {currentTier?.name || 'Supporter'}
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Payment Method:</Text>
          <Text style={styles.summaryValue}>
            {PAYMENT_METHODS.find((m) => m.id === selectedMethod)?.name}
          </Text>
        </View>
      </View>

      <View style={styles.stepButtons}>
        <TouchableOpacity style={styles.backButton} onPress={() => setStep(1)}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={() => setStep(3)}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Your Information</Text>
      <Text style={styles.stepDescription}>
        Please provide your details for receipt and acknowledgment.
      </Text>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Enter your full name"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email Address</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Phone Number</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={(text) => setFormData({ ...formData, phone: text })}
        />
      </View>

      <View style={styles.checkboxRow}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setFormData({ ...formData, isAnonymous: !formData.isAnonymous })}
        >
          <Ionicons
            name={formData.isAnonymous ? 'checkbox' : 'square-outline'}
            size={24}
            color={formData.isAnonymous ? colors.primary : colors.outline}
          />
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Make this donation anonymous</Text>
      </View>

      <View style={styles.checkboxRow}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setFormData({ ...formData, wantReceipt: !formData.wantReceipt })}
        >
          <Ionicons
            name={formData.wantReceipt ? 'checkbox' : 'square-outline'}
            size={24}
            color={formData.wantReceipt ? colors.primary : colors.outline}
          />
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Send me a receipt via email</Text>
      </View>

      <View style={styles.securityNotice}>
        <Ionicons name="shield-checkmark" size={24} color={colors.primary} />
        <Text style={styles.securityText}>
          Your payment information is encrypted and secure. We never store your card details.
        </Text>
      </View>

      <View style={styles.stepButtons}>
        <TouchableOpacity style={styles.backButton} onPress={() => setStep(2)}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton}>
          <Ionicons name="lock-closed" size={18} color={colors.onPrimary} />
          <Text style={styles.continueButtonText}>Complete Donation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Support the Campaign</Text>
        <Text style={styles.headerSubtitle}>
          Your contribution makes a difference
        </Text>
      </View>

      {/* Progress Steps */}
      <View style={styles.progressSteps}>
        {[1, 2, 3].map((s) => (
          <View key={s} style={styles.stepIndicator}>
            <View
              style={[
                styles.stepCircle,
                step >= s && styles.stepCircleActive,
                step === s && styles.stepCircleCurrent,
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  step >= s && styles.stepNumberActive,
                ]}
              >
                {s}
              </Text>
            </View>
            <Text style={styles.stepLabel}>
              {s === 1 ? 'Amount' : s === 2 ? 'Payment' : 'Details'}
            </Text>
            {s < 3 && <View style={styles.stepLine} />}
          </View>
        ))}
      </View>

      {/* Step Content */}
      <View style={styles.content}>
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </View>

      {/* Transparency Section */}
      <View style={styles.transparencySection}>
        <Ionicons name="eye" size={32} color={colors.primary} />
        <Text style={styles.transparencyTitle}>Transparent & Accountable</Text>
        <Text style={styles.transparencyText}>
          Every donation is tracked and reported. View our financial reports
          to see how your contribution is making an impact.
        </Text>
        <TouchableOpacity style={styles.reportsButton}>
          <Text style={styles.reportsButtonText}>View Financial Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  header: {
    backgroundColor: colors.primary,
    padding: spacing[8],
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: typography.headline.medium.fontSize,
    fontWeight: '700',
    color: colors.onPrimary,
    marginBottom: spacing[2],
  },
  headerSubtitle: {
    fontSize: typography.body.large.fontSize,
    color: colors.onPrimary,
    opacity: 0.9,
  },
  progressSteps: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: spacing[6],
    backgroundColor: colors.surfaceContainerLow,
  },
  stepIndicator: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.surfaceContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircleActive: {
    backgroundColor: colors.primary,
  },
  stepCircleCurrent: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onSurfaceVariant,
  },
  stepNumberActive: {
    color: colors.onPrimary,
  },
  stepLabel: {
    fontSize: 12,
    color: colors.onSurfaceVariant,
    marginTop: spacing[1],
    position: 'absolute',
    bottom: -20,
    width: 60,
    textAlign: 'center',
  },
  stepLine: {
    width: 40,
    height: 2,
    backgroundColor: colors.surfaceContainer,
    marginHorizontal: spacing[2],
  },
  content: {
    padding: spacing[6],
  },
  stepContent: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: shapes.extraLarge,
    padding: spacing[6],
    ...shapes.shadow,
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: spacing[2],
  },
  stepDescription: {
    fontSize: 15,
    color: colors.onSurfaceVariant,
    marginBottom: spacing[6],
  },
  amountGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
    marginBottom: spacing[6],
  },
  amountButton: {
    width: '30%',
    paddingVertical: spacing[4],
    backgroundColor: colors.surfaceContainer,
    borderRadius: shapes.large,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  amountButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  amountButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onSurface,
  },
  amountButtonTextActive: {
    color: colors.onPrimary,
  },
  customAmountContainer: {
    marginBottom: spacing[6],
  },
  customAmountLabel: {
    fontSize: 14,
    color: colors.onSurfaceVariant,
    marginBottom: spacing[2],
  },
  customAmountInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceContainer,
    borderRadius: shapes.large,
    paddingHorizontal: spacing[4],
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  currencySymbol: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.onSurface,
    marginRight: spacing[2],
  },
  amountInput: {
    flex: 1,
    paddingVertical: spacing[4],
    fontSize: 18,
    color: colors.onSurface,
  },
  tierCard: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: shapes.large,
    padding: spacing[5],
    marginBottom: spacing[6],
    borderWidth: 2,
  },
  tierHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing[3],
  },
  tierName: {
    fontSize: 18,
    fontWeight: '700',
  },
  tierBenefitsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onSurface,
    marginBottom: spacing[2],
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  benefitText: {
    fontSize: 14,
    color: colors.onSurfaceVariant,
    marginLeft: spacing[2],
  },
  continueButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing[4],
    borderRadius: shapes.large,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: colors.surfaceContainer,
  },
  continueButtonText: {
    color: colors.onPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  paymentMethods: {
    gap: spacing[3],
    marginBottom: spacing[6],
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    backgroundColor: colors.surfaceContainer,
    borderRadius: shapes.large,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  methodCardActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primary + '05',
  },
  methodName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: colors.onSurface,
    marginLeft: spacing[3],
  },
  methodNameActive: {
    color: colors.primary,
  },
  donationSummary: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: shapes.large,
    padding: spacing[5],
    marginBottom: spacing[6],
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: spacing[3],
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing[2],
  },
  summaryLabel: {
    fontSize: 14,
    color: colors.onSurfaceVariant,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onSurface,
  },
  stepButtons: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  backButton: {
    flex: 1,
    paddingVertical: spacing[4],
    borderRadius: shapes.large,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onSurface,
  },
  formGroup: {
    marginBottom: spacing[5],
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onSurface,
    marginBottom: spacing[2],
  },
  formInput: {
    backgroundColor: colors.surfaceContainer,
    borderRadius: shapes.large,
    padding: spacing[4],
    fontSize: 15,
    color: colors.onSurface,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  checkbox: {
    marginRight: spacing[3],
  },
  checkboxLabel: {
    fontSize: 14,
    color: colors.onSurface,
  },
  securityNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary + '08',
    padding: spacing[4],
    borderRadius: shapes.large,
    marginBottom: spacing[6],
  },
  securityText: {
    flex: 1,
    fontSize: 13,
    color: colors.onSurfaceVariant,
    marginLeft: spacing[3],
    lineHeight: 18,
  },
  transparencySection: {
    backgroundColor: colors.surfaceContainerLow,
    padding: spacing[8],
    alignItems: 'center',
  },
  transparencyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.onSurface,
    marginTop: spacing[4],
    marginBottom: spacing[2],
  },
  transparencyText: {
    fontSize: 15,
    color: colors.onSurfaceVariant,
    textAlign: 'center',
    marginBottom: spacing[6],
    maxWidth: 400,
  },
  reportsButton: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
    borderRadius: shapes.large,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  reportsButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});
