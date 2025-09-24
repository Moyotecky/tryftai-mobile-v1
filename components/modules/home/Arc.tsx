import React, { JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CreditStatus = {
  text: string;
  color: string;
};

type CreditScoreProps = {
  score?: number; // defaults to 720
};

export const CreditScore: React.FC<CreditScoreProps> = ({ score = 550 }) => {
  const percentage = Math.max(0, Math.min(100, ((score - 300) / (850 - 300)) * 100));

  const getStatus = (score: number): CreditStatus => {
    if (score >= 800) return { text: 'Excellent', color: '#4CAF50' };
    if (score >= 740) return { text: 'Very Good', color: '#8BC34A' };
    if (score >= 670) return { text: 'Good', color: '#CDDC39' };
    if (score >= 580) return { text: 'Fair', color: '#FF9800' };
    return { text: 'Poor', color: '#F44336' };
  };

  const status = getStatus(score);

  const segments: JSX.Element[] = [];
  const totalSegments = 60;
  const filledSegments = Math.floor((percentage / 100) * totalSegments);

  for (let i = 0; i < totalSegments; i++) {
    const isFilled = i < filledSegments;
    let segmentColor = '#E0E0E0';

    if (isFilled) {
      const segmentPosition = i / totalSegments;
      if (segmentPosition <= 0.2) segmentColor = '#F44336';
      else if (segmentPosition <= 0.4) segmentColor = '#FF9800';
      else if (segmentPosition <= 0.6) segmentColor = '#CDDC39';
      else if (segmentPosition <= 0.8) segmentColor = '#8BC34A';
      else segmentColor = '#4CAF50';
    }

    segments.push(
      <View
        key={i}
        style={[
          styles.segment,
          {
            backgroundColor: segmentColor,
            transform: [{ rotate: `${(i * 180) / totalSegments - 90}deg` }],
          },
        ]}
      />
    );
  }

  return (
    <View style={styles.scoreContainer}>
      <View style={styles.gaugeBackground}>
        <View style={styles.segmentsContainer}>{segments}</View>

        {/* <View
                    style={[
                        styles.indicator,
                        {
                            transform: [
                                { rotate: `${(percentage * 180) / 100 - 90}deg` },
                                { translateX: 140 },
                            ],
                        },
                    ]}
                /> */}

        <View style={styles.centerContent}>
          <Text style={styles.scoreText}>{score}</Text>
          <View style={styles.statusRow}>
            <Text style={[styles.statusText, { color: status.color }]}>{status.text}</Text>
            <View style={styles.infoIcon}>
              <Text style={styles.infoText}>i</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  gaugeBackground: {
    width: 400,
    height: 200,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  segmentsContainer: {
    position: 'absolute',
    width: 400,
    height: 400,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  segment: {
    position: 'absolute',
    width: 4,
    height: 20,
    top: 30,
    borderRadius: 0,
    transformOrigin: '2px 120px',
  },
  // indicator: {
  //     position: 'absolute',
  //     width: 12,
  //     height: 12,
  //     backgroundColor: '#00BCD4',
  //     borderRadius: 6,
  //     borderWidth: 2,
  //     borderColor: '#fff',
  //     top: 18,
  //     transformOrigin: '6px 132px',
  // },
  centerContent: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  infoIcon: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
