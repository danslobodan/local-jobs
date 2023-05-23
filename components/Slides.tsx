import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface Props {
    data: { text: string; color: string }[];
    onComplete: () => void;
}

export const Slides: React.FC<Props> = ({ data, onComplete }) => {
    const renderLastSlide = (index: number) => {
        if (index === data.length - 1) {
            return (
                <Button
                    title='Onwards!'
                    raised
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.button}
                    onPress={onComplete}
                />
            );
        }

        return null;
    };

    return (
        <ScrollView
            horizontal
            pagingEnabled
            style={styles.mainContainer}
            contentContainerStyle={styles.contentContainer}
        >
            {data.map((slide, index) => (
                <View
                    key={slide.text}
                    style={[styles.slide, { backgroundColor: slide.color }]}
                >
                    <Text style={styles.text}>{slide.text}</Text>
                    {renderLastSlide(index)}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
    },
    contentContainer: {},
    slide: {
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
    buttonContainer: {
        marginTop: 15,
    },
    button: {
        backgroundColor: '#0288D1',
    },
});
