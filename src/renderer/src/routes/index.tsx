import { createHashRouter } from 'react-router-dom'

import { HomePage } from './pages/home-page'
import { SettingsPage } from './pages/settings-page'
import { ChatPage } from './pages/chat-page'
import { RootLayout } from './layouts/root-layout'

export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/chat/:id',
        element: <ChatPage />
      },
      {
        path: '/settings',
        element: <SettingsPage />
      }
    ]
  }
])