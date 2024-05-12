"use client";
import { useRef } from "react";
import CvLayout from "./cvLayout";
import PortfolioLayout from "./portfolioLayout";
import { CandidateProfileProp } from "./viewLayout";
import ProfileTabProvider from "@/contexts/profileTabContext";

export default function PreHandler({ type, objectData }: { type: "cv" | "portfolio"; objectData: string }) {
	const profile = useRef<CandidateProfileProp>(JSON.parse(objectData));
	return <ProfileTabProvider>{type === "cv" ? <CvLayout profile={profile.current} /> : <PortfolioLayout profile={profile.current} />}</ProfileTabProvider>;
}
