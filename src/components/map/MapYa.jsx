import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const coordinates = [
  [55.684758, 37.738521],
  [57.684758, 39.738521],
];

function MapYa() {
  return (
    <YMaps>
      <Map width={1920} height={620} defaultState={mapData}>
        {coordinates.map((coordinate) => (
          <Placemark geometry={coordinate} />
        ))}
      </Map>
    </YMaps>
  );
}

export { MapYa };
