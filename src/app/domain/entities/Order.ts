import { useModelFactory, Immutable } from 'src/app/lib/useModelFactory'

import { Address, useAddressDefaults } from './Address'
import { Contact, useContactDefaults } from './Contact'

/**
 * DOMAIN MODEL
 * --------------------------------
 */
export type Order = Immutable<{
  contact: Contact
  deliveryAddress: Address
}>

/**
 * DOMAIN MODEL - DEFAULTS
 * --------------------------------
 */
export const useOrderDefaults = (): Order => ({
  contact: useContactDefaults(),
  deliveryAddress: useAddressDefaults(),
})

/**
 * DOMAIN MODEL - CONSTRUCTOR
 * --------------------------------
 */
export const createOrder = useModelFactory<Order>({
  defaults: useOrderDefaults,
})
