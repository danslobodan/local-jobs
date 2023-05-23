import { View } from 'react-native';
import { Slides } from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' },
];

interface Props {
    navigation: any;
}

export const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
    const onSlidesComplete = () => {
        navigation.navigate('Auth');
    };

    return (
        <View>
            <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />
        </View>
    );
};
