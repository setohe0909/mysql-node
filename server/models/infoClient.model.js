import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'infoClients';

/**
 * infoClient model.
 */
class infoClient extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default infoClient;
