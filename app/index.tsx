import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SonarDashboard() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <View style={styles.logoCircle} />
              <View style={styles.logoArc1} />
              <View style={styles.logoArc2} />
              <View style={styles.logoArc3} />
            </View>
            <Text style={styles.logoText}>Sonar</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            Resulting in more secure, reliable, and maintainable software
          </Text>

          <View style={styles.grid}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Security</Text>
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.cardNumber}>0</Text>
                  <Text style={styles.cardSubtext}>Open issues</Text>
                </View>
                <View style={styles.badgeA}>
                  <Text style={styles.badgeText}>A</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Reliability</Text>
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.cardNumber}>0</Text>
                  <Text style={styles.cardSubtext}>Open issues</Text>
                </View>
                <View style={styles.badgeA}>
                  <Text style={styles.badgeText}>A</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Maintainability</Text>
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.cardNumber}>1</Text>
                  <Text style={styles.cardSubtext}>Open issues</Text>
                </View>
                <View style={styles.badgeA}>
                  <Text style={styles.badgeText}>A</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Accepted issues</Text>
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.cardNumber}>0</Text>
                  <Text style={styles.cardSubtext}>Valid issues that were not fixed</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>⊘</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Coverage</Text>
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.cardNumberLarge}>97.1%</Text>
                  <Text style={styles.cardSubtext}>On 552 lines to cover.</Text>
                </View>
                <View style={styles.circleProgress}>
                  <View style={styles.circleProgressInner} />
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Duplications</Text>
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.cardNumberLarge}>0.0%</Text>
                  <Text style={styles.cardSubtext}>On 27 lines.</Text>
                </View>
                <View style={styles.dotIndicator} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0f2e',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoCircle: {
    width: 12,
    height: 12,
    backgroundColor: '#1a0f2e',
    borderRadius: 6,
    position: 'absolute',
  },
  logoArc1: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderColor: '#1a0f2e',
    borderRadius: 10,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
  },
  logoArc2: {
    width: 28,
    height: 28,
    borderWidth: 3,
    borderColor: '#1a0f2e',
    borderRadius: 14,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
  },
  logoArc3: {
    width: 36,
    height: 36,
    borderWidth: 3,
    borderColor: '#1a0f2e',
    borderRadius: 18,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
  },
  logoText: {
    fontSize: 32,
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 32,
    lineHeight: 38,
  },
  grid: {
    gap: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  cardNumberLarge: {
    fontSize: 40,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  cardSubtext: {
    fontSize: 13,
    color: '#6b7280',
  },
  badgeA: {
    width: 48,
    height: 48,
    backgroundColor: '#d1fae5',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#059669',
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#f3f4f6',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
    color: '#6b7280',
  },
  circleProgress: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: '#10b981',
    borderTopColor: '#d1fae5',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-45deg' }],
  },
  circleProgressInner: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
  },
  dotIndicator: {
    width: 12,
    height: 12,
    backgroundColor: '#10b981',
    borderRadius: 6,
  },
});
