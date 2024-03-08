export default {
    name: 'jobb', //navnet på dokumentet
    type: 'document',
    title: 'Legg Til Jobb', //det som vises på nettsiden
    fields: [
    // alle datafeltene du skal ha i et dokument
    {
    name: 'Name',
    type: 'string',
    title: 'Hva er jobben?',
    },
    {
    name: 'Timer',
    type: 'number',
    title: 'Timer estimert for jobben',
    },
    {
        name: 'Betaling',
        type: 'number',
        title: 'Betaling for jobben',
    },

    {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // If you want to enable hotspot for image cropping
        },
      }



]}

