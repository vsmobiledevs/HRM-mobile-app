import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../redux/apis/authApis';

const Timmer: React.FC = () => {
  const dispatch = useDispatch();
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerId, setTimerId] = useState<number | undefined>(undefined);

  const login = () => {
    const formData = new FormData();
    formData.append('email', 'infinixvs@gmail.com');
    formData.append('password', '12345678');

    dispatch(signIn(formData));
  };

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);

      setTimerId(id);
    } else {
      clearInterval(timerId);
      setTimerId(undefined);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setElapsedTime(0);
  };

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <View style={styles.container}>
      <Text>{formatTime(elapsedTime)}</Text>

      {!isRunning ? (
        <Button title="Start" onPress={startTimer} />
      ) : (
        <Button title="Stop" onPress={stopTimer} />
      )}
      <Button title="Reset" onPress={resetTimer} />
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default Timmer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
