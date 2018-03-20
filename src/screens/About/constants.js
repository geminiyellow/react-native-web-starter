import { isWeb } from '../../utils/common';

export const baseURL = isWeb ? '' : 'http://localhost:5000';
export const endpoint = `${baseURL}/api/count`;
