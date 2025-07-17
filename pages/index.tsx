import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useMemo, useState } from "react";
import EventList from "@/components/EventList/EventList";
import { eventsData } from "@/utils/dummyData";



export default function Home() {
  //const [eventsArray, setEventsArray] = useState<>
  const featuredEvents = useMemo(()=>{
    return eventsData.filter(event => event.isFeatured)
  }, [eventsData])

  return (
    <>
      <EventList eventArr={featuredEvents}/>
    </>
  );
}
