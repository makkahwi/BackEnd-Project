{
  /* <ref *2> Response {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  res: <ref *1> IncomingMessage {
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      flowing: true,
      ended: true,
      endEmitted: true,
      reading: false,
      constructed: true,
      sync: true,
      needReadable: false,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: true,
      autoDestroy: true,
      destroyed: true,
      errored: null,
      closed: true,
      closeEmitted: true,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: true,
      dataEmitted: true,
      decoder: [StringDecoder],
      encoding: 'utf8',
      [Symbol(kPaused)]: false
    },
    _events: [Object: null prototype] {
      end: [Array],
      data: [Array],
      error: [Array],
      close: [Function: bound emit]
    },
    _eventsCount: 4,
    _maxListeners: undefined,
    socket: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'localhost',
      _closeAfterHandlingError: false,
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [ClientRequest],
      [Symbol(async_id_symbol)]: 24,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: true,
      [Symbol(kSetKeepAlive)]: false,
      [Symbol(kSetKeepAliveInitialDelay)]: 0,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    rawHeaders: [
      'X-Powered-By',
      'Express',
      'Content-Type',
      'text/plain; charset=utf-8',
      'Content-Length',
      '7',
      'ETag',
      'W/"7-rM9AyJuqT6iOan/xHh+AW+7K/T8"',
      'Date',
      'Thu, 03 Aug 2023 13:15:48 GMT',
      'Connection',
      'close'
    ],
    rawTrailers: [],
    aborted: false,
    upgrade: false,
    url: '',
    method: null,
    statusCode: 201,
    statusMessage: 'Created',
    client: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'localhost',
      _closeAfterHandlingError: false,
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [ClientRequest],
      [Symbol(async_id_symbol)]: 24,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: true,
      [Symbol(kSetKeepAlive)]: false,
      [Symbol(kSetKeepAliveInitialDelay)]: 0,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    _consuming: false,
    _dumped: false,
    req: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 56,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: false,
      socket: [Socket],
      _header: 'POST /courses/add HTTP/1.1\r\n' +
        'Host: localhost:3000\r\n' +
        'Accept-Encoding: gzip, deflate\r\n' +
        'Content-Type: application/json\r\n' +
        'Content-Length: 56\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/courses/add',
      _ended: true,
      res: [Circular *1],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'localhost',
      protocol: 'http:',
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kEndCalled)]: true,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype],
      [Symbol(kUniqueHeaders)]: null
    },
    text: 'Created',
    [Symbol(kCapture)]: false,
    [Symbol(kHeaders)]: {
      'x-powered-by': 'Express',
      'content-type': 'text/plain; charset=utf-8',
      'content-length': '7',
      etag: 'W/"7-rM9AyJuqT6iOan/xHh+AW+7K/T8"',
      date: 'Thu, 03 Aug 2023 13:15:48 GMT',
      connection: 'close'
    },
    [Symbol(kHeadersCount)]: 12,
    [Symbol(kTrailers)]: null,
    [Symbol(kTrailersCount)]: 0
  },
  request: Test {
    _events: [Object: null prototype] { abort: [Function (anonymous)] },
    _eventsCount: 1,
    _maxListeners: undefined,
    _enableHttp2: false,
    _agent: false,
    _formData: null,
    method: 'POST',
    url: 'http://localhost:3000/courses/add',
    _header: { 'content-type': 'application/json' },
    header: { 'Content-Type': 'application/json' },
    writable: true,
    _redirects: 0,
    _maxRedirects: 0,
    cookies: '',
    qs: {},
    _query: [],
    qsRaw: [],
    _redirectList: [],
    _streamRequest: false,
    _lookup: undefined,
    _buffer: true,
    app: 'http://localhost:3000',
    _asserts: [ [Function (anonymous)] ],
    _data: { title: 'Mathematics', desc: 'A course on mathematics' },
    req: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 56,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: false,
      socket: [Socket],
      _header: 'POST /courses/add HTTP/1.1\r\n' +
        'Host: localhost:3000\r\n' +
        'Accept-Encoding: gzip, deflate\r\n' +
        'Content-Type: application/json\r\n' +
        'Content-Length: 56\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/courses/add',
      _ended: true,
      res: [IncomingMessage],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'localhost',
      protocol: 'http:',
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kEndCalled)]: true,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype],
      [Symbol(kUniqueHeaders)]: null
    },
    protocol: 'http:',
    host: 'localhost:3000',
    _endCalled: true,
    _callback: [Function (anonymous)],
    _fullfilledPromise: Promise { [Circular *2] },
    res: <ref *1> IncomingMessage {
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      socket: [Socket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [Array],
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 201,
      statusMessage: 'Created',
      client: [Socket],
      _consuming: false,
      _dumped: false,
      req: [ClientRequest],
      text: 'Created',
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: [Object],
      [Symbol(kHeadersCount)]: 12,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0
    },
    _resBuffered: true,
    response: [Circular *2],
    called: true,
    [Symbol(kCapture)]: false
  },
  req: <ref *3> ClientRequest {
    _events: [Object: null prototype] {
      drain: [Function],
      error: [Function (anonymous)],
      finish: [Function: requestOnFinish]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: false,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    maxRequestsOnConnectionReached: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: true,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    strictContentLength: false,
    _contentLength: 56,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    _closed: false,
    socket: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'localhost',
      _closeAfterHandlingError: false,
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [Circular *3],
      [Symbol(async_id_symbol)]: 24,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: true,
      [Symbol(kSetKeepAlive)]: false,
      [Symbol(kSetKeepAliveInitialDelay)]: 0,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    _header: 'POST /courses/add HTTP/1.1\r\n' +
      'Host: localhost:3000\r\n' +
      'Accept-Encoding: gzip, deflate\r\n' +
      'Content-Type: application/json\r\n' +
      'Content-Length: 56\r\n' +
      'Connection: close\r\n' +
      '\r\n',
    _keepAliveTimeout: 0,
    _onPendingData: [Function: nop],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 80,
      protocol: 'http:',
      options: [Object: null prototype],
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype],
      freeSockets: [Object: null prototype] {},
      keepAliveMsecs: 1000,
      keepAlive: false,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 1,
      [Symbol(kCapture)]: false
    },
    socketPath: undefined,
    method: 'POST',
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    path: '/courses/add',
    _ended: true,
    res: <ref *1> IncomingMessage {
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      socket: [Socket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [Array],
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 201,
      statusMessage: 'Created',
      client: [Socket],
      _consuming: false,
      _dumped: false,
      req: [Circular *3],
      text: 'Created',
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: [Object],
      [Symbol(kHeadersCount)]: 12,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0
    },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    reusedSocket: false,
    host: 'localhost',
    protocol: 'http:',
    [Symbol(kCapture)]: false,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(kEndCalled)]: true,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      host: [Array],
      'accept-encoding': [Array],
      'content-type': [Array],
      'content-length': [Array]
    },
    [Symbol(kUniqueHeaders)]: null
  },
  text: 'Created',
  files: undefined,
  buffered: true,
  headers: {
    'x-powered-by': 'Express',
    'content-type': 'text/plain; charset=utf-8',
    'content-length': '7',
    etag: 'W/"7-rM9AyJuqT6iOan/xHh+AW+7K/T8"',
    date: 'Thu, 03 Aug 2023 13:15:48 GMT',
    connection: 'close'
  },
  header: {
    'x-powered-by': 'Express',
    'content-type': 'text/plain; charset=utf-8',
    'content-length': '7',
    etag: 'W/"7-rM9AyJuqT6iOan/xHh+AW+7K/T8"',
    date: 'Thu, 03 Aug 2023 13:15:48 GMT',
    connection: 'close'
  },
  statusCode: 201,
  status: 201,
  statusType: 2,
  info: false,
  ok: true,
  redirect: false,
  clientError: false,
  serverError: false,
  error: false,
  created: true,
  accepted: false,
  noContent: false,
  badRequest: false,
  unauthorized: false,
  notAcceptable: false,
  forbidden: false,
  notFound: false,
  unprocessableEntity: false,
  type: 'text/plain',
  charset: 'utf-8',
  links: {},
  setEncoding: [Function: bound ],
  redirects: [],
  pipe: [Function (anonymous)],
  [Symbol(kCapture)]: false
}
=======end====response.body.dataValues.id==========
    1) should create a new course
Executing (default): SELECT "id", "title", "desc", "createdAt", "updatedAt" FROM "courses" AS "courses" LIMIT 10 OFFSET 0;
    ✔ should get all courses
    2) should get a course by ID
    3) should update a course
    4) should delete a course


  1 passing (241ms)
  4 failing

  1) CRUD Operations
       should create a new course:
     TypeError: Cannot read properties of undefined (reading 'id')
      at Context.<anonymous> (test\api.test.js:26:41)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

  2) CRUD Operations
       should get a course by ID:
     Error: Course ID not available.
      at Context.<anonymous> (test\api.test.js:44:13)
      at process.processImmediate (node:internal/timers:471:21)

  3) CRUD Operations
       should update a course:
     Error: Course ID not available.
      at Context.<anonymous> (test\api.test.js:60:13)
      at process.processImmediate (node:internal/timers:471:21)

  4) CRUD Operations
       should delete a course:
     Error: Course ID not available.
      at Context.<anonymous> (test\api.test.js:81:13)
      at process.processImmediate (node:internal/timers:471:21)



 */
}
