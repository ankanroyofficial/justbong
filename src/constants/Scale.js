import { Dimensions } from "react-native";
const {width,height}= Dimensions.get('window')

const guideLineBaseWidth = 1080;
const guideLineBaseHeight =1920;

const scale = size => width/guideLineBaseWidth*size;

export {scale};