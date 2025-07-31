import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useMemo, useState } from "react";
import EventList from "@/components/EventList/EventList";
import { eventsData } from "@/utils/dummyData";
import { useRouter } from "next/router";



export default function Home() {
  //const [eventsArray, setEventsArray] = useState<>
  const featuredEvents = useMemo(()=>{
    return eventsData.filter(event => event.isFeatured)
  }, [eventsData])

  const router = useRouter();

  const handleChange = (e: any) => {
      const dateMonth = e.target.value;
      const [year, month] = dateMonth.split('-');
      // console.log("Date: ",{year, month})
      router.push(`http://localhost:3000/${year}/${month}`)
  }

  return (
    <>
       <input type='date' name='date' onChange={handleChange}/>
      <EventList eventArr={featuredEvents}/>
    </>
  );
}
