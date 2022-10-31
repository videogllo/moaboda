/**
 * 각 플랫폼에 대한 아이콘을 map()할 때, 출력
 * @param val
 * @returns
 */
export const dynamicIcon = (val) => {
    let returnValue = "";

    switch (val) {
        case "Youtube":
            returnValue = "/image/icon/youtube.png";
            break;
        case "Twitch":
            returnValue = "/image/icon/twitch.png";
            break;
    }

    return returnValue;
};
