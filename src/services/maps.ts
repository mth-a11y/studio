/**
 * Represents a geographical coordinate.
 */
export interface Coordinate {
  /**
   * The latitude of the coordinate.
   */
  lat: number;
  /**
   * The longitude of the coordinate.
   */
  lng: number;
}

/**
 * Represents the location of a business.
 */
export interface BusinessLocation {
  /**
   * The name of the business.
   */
  name: string;
  /**
   * The coordinates of the business.
   */
  coordinate: Coordinate;
}

/**
 * Asynchronously retrieves the location of a business.
 *
 * @returns A promise that resolves to a BusinessLocation object containing the coordinates of the business.
 */
export async function getBusinessLocation(): Promise<BusinessLocation> {
  // TODO: Implement this by calling an API.

  return {
    name: 'Mak-Med',
    coordinate: {
      lat: 37.7749,
      lng: -122.4194,
    },
  };
}
