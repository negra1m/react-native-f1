import React from 'react'
import View from 'react-native'
import { Button, Text } from 'native-base'

const Seasons = () => {

    const renderSeasons = () => {
        let items = [];
        for (let i = 0; i < 20; i++) {
            const year = `20${i > 9 ? i : `0${i}`}`
            items.push(
                <Button key={`season-${year}`}>
                    <Text>{year}</Text>
                </Button>
            )
        }
    }

    return (
        <View>{renderSeasons()}</View>
    )
};

export default Seasons