import React, {useEffect, useState} from 'react';
import {FlatList, SegmentedControlIOS, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { getDataModel } from './DataModel';

// import { BarChart} from "react-native-gifted-charts";
import { BarChart } from "react-native-chart-kit";
import { Icon } from 'react-native-elements';
import { render } from 'react-dom';
import { Dimensions } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";



function DataPage({navigation}) {

    const dataModel = getDataModel();
    const [trackingList, setTrackingList] = useState(dataModel.getTrackingListCopy());
    const chartConfig = {
        backgroundGradientFrom: "rgba(255, 255, 255, 0.1)",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "rgba(255, 255, 255, 0.1)",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => '#505050',
        strokeWidth: 1, // optional, default 3
        barPercentage: 1,
        decimalPlaces: 0,
        barRadius: 5,
        propsForLabels: styles.ylabel,
        useShadowColorFromDataset: false, // optional
      };
    const screenWidth = Dimensions.get("window").width*0.9;
    const [index, setIndex] = useState(0);

    let getTime = (time)=>{
        let date = new Date(null);
        date.setSeconds(time); // specify value for SECONDS here
        let result = date.toISOString().substr(11, 8);
          return result;
    }

    let totalTime = () => {
        let sum = 0;
        for (item of trackingList) {
            sum += item.time;
        };
        totalTime = getTime(sum);
        return totalTime;
    }

    let getChartData = () => {
        let labels = [];
        let values = [];
        let barColors = [];
        let dic = {};
        if (index === 0) {
            for (item of trackingList) {
                labels.push(item.text);
                values.push(item.time/60);
                console.log(item.color);
                let tempColor = item.color;
                barColors.push((opacity=0.5) => tempColor);
            };
            dic = {'labels': labels, datasets: [{'data': values, 'colors': barColors}]}
        }
        else {
            let icons = [];
            let iconDict = {};
            for (item of trackingList) {
                if (icons.includes(item.icon)) {
                    categoryData = iconDict[item.icon];
                    categoryData['value'] = categoryData['value'] + item.time/60;
                    iconDict[item.icon] = categoryData;
                }
                else {
                    categoryData = {value: item.time/60,
                                    label: item.label,
                                color: item.color}
                    iconDict[item.icon] = categoryData;
                    icons.push(item.icon);
                }
            }
            for (var key in iconDict) {
                labels.push(iconDict[key].label);
                values.push(iconDict[key].value);
                let tempColor = iconDict[key].color;
                barColors.push((opacity=0.5) => tempColor);
            }
            dic = {'labels': labels, datasets: [{'data': values, 'colors': barColors}]}
        }

        return dic
    }



    const data =  getChartData();

    useEffect(()=>{
        dataModel.subscribeToUpdates(()=>{
          setTrackingList(dataModel.getTrackingListCopy());
        });
      }, []);

    return (
        <View style={styles.container}>
            <View style={styles.topCell}>
                <View style={styles.leftCell}>
                    <View><Text style={styles.subheaderText}>Total Tasks</Text></View>
                    <Text style={styles.bigTextCell}>{trackingList.length}</Text>
                </View>
                <View style={styles.rightCell}>
                    <View><Text style={styles.subheaderText}>Total Time</Text></View>
                    <Text style={styles.bigTextCell}>{totalTime()}</Text>
                </View>
            </View>


            <View style={styles.bottomCell}>

                <View style={styles.container}>
                    <View style={styles.segmentContainer}>
                        <SegmentedControlIOS style={styles.segmentCell}
                            values={['Task', 'Category']}
                            selectedIndex={index}
                            onChange={(event) => {
                            setIndex(event.nativeEvent.selectedSegmentIndex);
                            }}
                        />
                    </View>

                    <View style={styles.chartCell}>
                        <BarChart
                        data={data}
                        width={screenWidth}
                        height={300}
                        withInnerLines={false}
                        chartConfig={chartConfig}
                        fromZero={true}
                        withCustomBarColorFromData={true}
                        flatColor={true}
                        showBarTops={false}
                        formatXLabel={ (value) => SvgComponent() }
                        formatYLabel={ (yLabel) => console.log(yLabel) }
                        segments={3}
                        verticalLabelRotation={30}
                        />
                    </View>

                </View>

            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAFE',
        flexDirection: 'column',
        fontFamily: 'Helvetica Neue',
    },
    topCell: {
        flex: 0.3,
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: '5%',
        paddingTop: '5%'

    },
    leftCell: {
        flex: 0.4,
        height: '80%',
        padding: '5%',
        borderRadius: 10,
        backgroundColor:'white'
    },
    rightCell: {
        flex: 0.4,
        padding: '5%',
        height: '80%',
        borderRadius: 10,
        backgroundColor:'white'

    },
    subheaderText: {
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.5,
    },
    bigTextCell: {
        fontSize: 30,
        marginTop: '15%',
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
    },
    bottomCell: {
        flex: 0.8,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        padding: 20,
    },
    chartCell: {
        flex: 0.7,
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        paddingRight: 40,
    },
    segmentContainer: {
        margin: 20,

    },
    segmentCell: {
        padding: 20,
        flex: 0.15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ylabel: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.5,
        color: 'black',
    },



});

export default DataPage;