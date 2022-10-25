/**
* iso8601 to datetime function
* youtube에서 items.contentDetails.duration이(재생시간) iso8601 포맷임
 * @param {*} val 
 * @returns
 */
export const Iso8601_to_datetime = (val) => {
    //example: PT15M51S

    //dongseob - 나중에 다시 .. H도 있을수 있음
    const returnValue = /^PT(\d+)M(\d+)S$/.exec(val)

    return returnValue;
}