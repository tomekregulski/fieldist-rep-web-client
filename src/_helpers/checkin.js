const getPosition = () => {
  // get user's location
  let lat;
  let lon;
  let timestamp;

  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    timestamp = position.timestamp;
    console.log([lat, lon, timestamp]);
    const geoObject = [lat, lon, timestamp];
    return geoObject;
  });

  // Use the below once ready to compare distance
  // navigator.geolocation.getCurrentPosition(async (position) => {
  // returns distance between venue and user's current location
  // const distance = () => {
  //   return (
  //     Math.round(
  //       ((getDistance(
  //         {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         },
  //         {
  //           latitude: report.all.venue.geometry.lat,
  //           longitude: report.all.venue.geometry.lng,
  //         }
  //       ) *
  //         0.621371) /
  //         1000) *
  //         100
  //     ) / 100
  //   );
  // };
  // console.log('distance: ', distance());
  // const distBetween = await distance();

  // if user is within half mile, set check in data in state and mark true. if not, mark false.
  //   if (distance() > 10.5) {
  //     setResponseResult('fail');
  //     setCheckIn((prevState) => ({
  //       ...prevState,
  //       check_in: {
  //         status: false,
  //         location: {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //           distance: distBetween,
  //         },
  //         timestamp: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
  //         user: user,
  //       },
  //     }));
  //   } else {
  //     setCheckIn((prevState) => ({
  //       ...prevState,
  //       check_in: {
  //         status: true,
  //         location: {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //           distance: distBetween,
  //         },
  //         timestamp: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
  //         user: user,
  //       },
  //     }));
  //   }
  // });
  // console.log(checkIn);
};

module.exports = getPosition;
