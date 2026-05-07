/** Contact + photography for Robert's Antiques: single source of truth. */

export const SITE_ADDRESS = {
  street: '1055 E Washington Street',
  city: 'Lewisburg',
  region: 'WV',
  country: 'United States',
};

export const SITE_ADDRESS_LINE2 = `${SITE_ADDRESS.city}, ${SITE_ADDRESS.region} · ${SITE_ADDRESS.country}`;

export const SITE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(
    `${SITE_ADDRESS.street}, ${SITE_ADDRESS.city}, ${SITE_ADDRESS.region}`
  );

export const SITE_PHONE_DISPLAY = '(304) 647 3404';
export const SITE_PHONE_TEL = 'tel:+13046473404';

export const SITE_ESTABLISHED = 1990;

/** Week starts Monday; values match storefront hours provided. */
export const SITE_HOURS = [
  { day: 'Monday', hours: '10:30 AM to 5:30 PM' },
  { day: 'Tuesday', hours: '10:30 AM to 5:30 PM' },
  { day: 'Wednesday', hours: '10:30 AM to 5:30 PM' },
  { day: 'Thursday', hours: '10:30 AM to 5:30 PM' },
  { day: 'Friday', hours: '10:30 AM to 5:30 PM' },
  { day: 'Saturday', hours: '10:30 AM to 5:30 PM' },
  { day: 'Sunday', hours: '11:00 AM to 3:00 PM' },
];

/** Facebook CDN; for production, download into `/public` and point paths there. */
export const SITE_IMAGES = {
  /** Still life: strong hero / mood */
  stillLife:
    'https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/471197783_447871348389228_6008562481043821073_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2a1932&_nc_ohc=o3rgKfOE5i4Q7kNvwFY6lAC&_nc_oc=Adri_KDsn3EkP4O5a3xzpIiAZxsvjCIMBG0D4JaDwIrADqUrCcgJtjIL9ZjFHa5VDSk&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=VjyE4cUHuOg0vBg-xIXNvg&_nc_ss=7b2a8&oh=00_Af7X1sEqOVYCLp2N3wdYp9U6tzM6DP_Kob-5_-arSbDaCw&oe=6A007A2B',
  /** Wine table: wine room / features */
  wineTable:
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/472192072_18481010410031595_4754982770831122234_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=xnFigxHKcCgQ7kNvwFkGxXL&_nc_oc=AdqQ8666Jq931ka82xiQuNRV4HMCllQZB0oOdR7bvUrYrI_koZf8GYcZfGHL39HpVXM&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=xrtnm9XAaaIPkyRZjTeXHQ&_nc_ss=7b2a8&oh=00_Af4bJ0lmSWu51Qhu31ZSIzDG7HFodmRVog5XyuvHYSOCGQ&oe=6A0072B9',
  /** Shop floor: mixed antiques, wine, gifts */
  shopFloor:
    'https://scontent-sjc6-1.xx.fbcdn.net/v/t39.30808-6/476775570_486620337847662_7006401706756172378_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=Ojdw4d3pOUoQ7kNvwHccMNH&_nc_oc=AdpCnNjCHqdhYN9DgG-itcM0EmY_LAeTV8ATnK32PHXmfFLR2yd_NZ8QtJuKbdYnlIo&_nc_zt=23&_nc_ht=scontent-sjc6-1.xx&_nc_gid=FVUu3sSi26IRgxJlQRYhrg&_nc_ss=7b2a8&oh=00_Af6QHPUZD7QqnOoWAoLZsC7gkXPbpN41uuuopKCwbn1iWA&oe=6A008E4A',
};

/** Curated reference photography (replace with owned assets for production). */
export const STOCK_IMAGES = {
  silverPlate:
    'https://www.decorativecollective.com/resources/images/blog-pictures/New-folder-name/Silverware-Antiques1-crop-v2.jpeg',
  carvedChest:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS891cL0KiKPfPjCvyyZMuIo-kUudvuBVeI1A&s',
  medievalCorbels:
    'https://www.periodoakantiques.co.uk/productimages/largeimage1/a-stunning-pair-of-rare-medieval-english-oak-angel-corbels-circa-1470-7417-1.jpeg',
  medievalChairs:
    'https://i.redd.it/help-medieval-dining-chairs-cabinet-for-auction-in-regina-v0-fdadxbv34d0a1.jpg?width=3072&format=pjpg&auto=webp&s=6796aefe5bdc89883c1f34852935830183cd820f',
  medievalCabinet:
    'https://preview.redd.it/origins-of-medieval-looking-cabinet-v0-zfhupzi52dpd1.jpg?width=640&crop=smart&auto=webp&s=ad8e23e72346d3e107232c865b02562bb60e77b2',
  curiosityMace:
    'https://images.stockcake.com/public/0/7/9/079b10ef-bda4-43df-ac24-201d442dd079_large/antique-mace-display-stockcake.jpg',
};
