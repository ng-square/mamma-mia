import { useModelFactory, Immutable } from 'src/app/lib/useModelFactory'

/**
 * DOMAIN MODEL
 * --------------------------------
 */
export type Address = Immutable<{
  postalCode: string
  city: string
  street: string
  streetNumber: string
}>

/**
 * DOMAIN MODEL - DEFAULTS
 * --------------------------------
 */
export function useAddressDefaults(): Address {
  return {
    postalCode: '',
    city: '',
    street: '',
    streetNumber: '',
  }
}

/**
 * DOMAIN MODEL - CONSTRUCTOR
 * --------------------------------
 */
export const createAddress = useModelFactory<Address>({
  defaults: useAddressDefaults,
})
