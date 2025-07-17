import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import EventList from "@/components/EventList/EventList";

const eventsData = [
  {
    name: 'SOFTEC',
    desc: 'Software Related',
    date: '10-09-2022',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: true
  },
  {
    name: 'Qawwali Night',
    desc: 'Entertainment Related',
    date: '10-09-2022',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: true
  },
  {
    name: 'Paindu Day',
    desc: 'Entertainment Related',
    date: '10-09-2023',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: false
  },
  {
    name: 'Tourism',
    desc: 'Nature Related',
    date: '14-10-2022',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: false
  },
  {
    name: 'Hasb e Hall',
    desc: 'Fun Related',
    date: '01-05-2025',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: false
  },
  {
    name: 'Ik din GEO k sth',
    desc: 'Topi drama',
    date: '05-11-2025',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: true
  },
  
]

export default function Home() {
  //const [eventsArray, setEventsArray] = useState<>
  return (
    <>
      <EventList eventArr={eventsData}/>
    </>
  );
}
