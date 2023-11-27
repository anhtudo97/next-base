export enum THEME_MODE  {
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}

export const BASE_URL: string = process.env.NEXT_PUBLIC_SERVER_BASE_URL as string || 'http://localhost:3000';