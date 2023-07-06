//   _   _ _   _ _ _ _          _____
//  | | | | |_(_) (_) |_ _  _  |_   _|  _ _ __  ___ ___
//  | |_| |  _| | | |  _| || |   | || || | '_ \/ -_|_-<
//   \___/ \__|_|_|_|\__|\_, |   |_| \_, | .__/\___/__/
//                       |__/        |__/|_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains utility and misc types.
 * @module
 */

/**
 * Used for the iLinkmap component type.
 */
export type ItemLink = {
  name: string;
  url?: string;
  children?: ItemLink[];
};
