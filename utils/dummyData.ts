export const eventsData = [
  {
    id: 'e1',
    name: 'SOFTEC',
    desc: 'Software Related',
    date: '10-09-2022',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: true
  },
  {
    id: 'e2',
    name: 'Qawwali Night',
    desc: 'Entertainment Related',
    date: '10-09-2022',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: true
  },
  {
    id: 'e3',
    name: 'Paindu Day',
    desc: 'Entertainment Related',
    date: '10-09-2023',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: false
  },
  {
    id: 'e4',
    name: 'Tourism',
    desc: 'Nature Related',
    date: '14-10-2022',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: false
  },
  {
    id: 'e5',
    name: 'Hasb e Hall',
    desc: 'Fun Related',
    date: '01-05-2025',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: false
  },
  {
    id: 'e6',
    name: 'Ik din GEO k sth',
    desc: 'Topi drama',
    date: '05-11-2025',
    image_url: 'https://images.ctfassets.net/ihx0a8chifpc/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg',
    isFeatured: true
  },
  
]


export const getEventById = (id: any) => {
   return eventsData.find(obj => obj.id === id)
}


export const getfilteredEvents = (year: any, month: any) => eventsData.filter(event => {
        const [,m,y] = event.date.split('-');
        return Boolean(y===year && m === month)
    })
