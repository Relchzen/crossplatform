import { Button, View } from "react-native"
import { ThemedText } from "./ThemedText";
interface ICounter {
    handleIncrement: () => void;
    handleDecrement: () => void;
    handleInput: () => void
    value: number;
}

const Counter = ({ handleIncrement, handleDecrement, handleInput, value }: ICounter) => {
    return (
        <View>
            <ThemedText>{value}</ThemedText>
            <Button title="Increment" onPress={handleIncrement} />
            <Button title="Decrement" onPress={handleDecrement} />
            <Button title="Pass Value" onPress={handleInput} />
        </View>
    )
}

export default Counter