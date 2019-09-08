import dotenvConfig from './config/dotenv';
import Queue from './lib/Queue';

dotenvConfig();

Queue.processQueue();
