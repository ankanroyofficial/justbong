import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomePage() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <Text>HomePage</Text>
            <Button title="Next" />
        </View>
    )
}
