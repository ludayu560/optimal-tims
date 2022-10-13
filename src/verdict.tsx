import React, { useState, useEffect} from 'react'
import dataSet from './shdata.json'

// +/- time for start and end of classes
const timeMargin: number = 15
// the cutoff after we consider it to be a bad time to go to Tims 
const threshold: number = 200

interface dataItem {
    building: string
    room: string
    start: number
    end: number
    days: string[]
    attended: number
}

interface trafficTime {
    start: number
    end: number
    weight: number
}
var dayDict: {[key : string]: number} = {
    'M' : 1,
    'T' : 2,
    'W' : 3,
    'Th' :4,
    'F' : 5,
}
var candidates: Array<dataItem> = []

dataSet.forEach(i => {
    if (i.building === "DC") {
        candidates.push(i)
        console.log(i)
    }
});

var timsStatus: string = ""
export const Verdict = () => {
    var trafficTimes: Array<trafficTime> = []

    const [time, setTime] = useState(new Date());

    useEffect(
      () => {
        const intervalId = setInterval(() => {
          setTime(new Date())
        }, 60000)
        //
        // find the classes today 
        candidates.forEach(i => {
            // apply the dictionary map dayDict to translate values
            let results = i.days.map(r => {return dayDict[r]})
            results.forEach(j => {
                if (j === time.getDay()) {
                    // for the interclass period {timeMargin} minutes before the start
                    trafficTimes.push({
                        start: i.start - timeMargin,
                        end: i.start,
                        weight: i.attended
                    })
                    // for the interclass period {timeMargin} minutes after the end
                    trafficTimes.push({
                        start: i.end,
                        end: i.end + timeMargin,
                        weight: i.attended
                    })
                }
            });
        });
        // convert from base-60 time to base-10. i.e. a count of pure minutes. 
        var minuteTime: number = time.getMinutes() + 60 * time.getHours()
        
        var currWeight: number = 0;
        // find the 'weight' of the current time. 
        // i.e. the number of people currently travelling through DC
        trafficTimes.forEach(i => { 
            if (minuteTime >= i.start && minuteTime <= i.end)  currWeight += i.weight 
        });

        timsStatus = (currWeight <= threshold)? "good" : "bad"

        console.log(currWeight)
        return () => {
          clearInterval(intervalId)
        }
      } 
    )
    return (
        <div>
            <h1>It's a <br /><span className={timsStatus}>{timsStatus}</span> <br /> time to go to Tims</h1>
        </div>
    )
}