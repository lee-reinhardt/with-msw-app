async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')
    server.listen({ onUnhandledRequest })
  } else {
    const { worker } = await import('./browser')
    worker.start({ onUnhandledRequest })
  }
}

initMocks()

export {}

function onUnhandledRequest(req: Request) {
  console.error('unhandled req', req.method, req.url)
}
