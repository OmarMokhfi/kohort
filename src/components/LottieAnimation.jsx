"use client";
import Lottie from "lottie-react";

import * as networkLottie from "src/components/lottie/network.json";
import * as posterLottie from "src/components/lottie/poster.json";
import * as qrLottie from "src/components/lottie/qrcode.json";
import * as socialLottie from "src/components/lottie/social.json";

const Animations = [posterLottie, networkLottie, qrLottie, socialLottie];

export default function LottieAnimation({ size = 150, dataIndex }) {
  return <Lottie animationData={Animations[dataIndex]} />;
}
