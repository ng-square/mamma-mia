import { useModelFactory, Immutable } from 'src/app/lib/useModelFactory';

/**
 * DOMAIN MODEL
 * --------------------------------
 */
export type Gender = 'male' | 'female'

export type Contact = Immutable<{
  gender: Gender
  firstName: string
  lastName: string
  email: string
}>

/**
 * DOMAIN MODEL - DEFAULTS
 * --------------------------------
 */
export const useContactDefaults = (): Contact => ({
  gender: 'male',
  firstName: '',
  lastName: '',
  email: '',
})

/**
 * DOMAIN MODEL - CONSTRUCTOR
 * --------------------------------
 */
export const createContact = useModelFactory<Contact>({
  defaults: useContactDefaults,
})
