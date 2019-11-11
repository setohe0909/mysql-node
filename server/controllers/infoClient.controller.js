import HttpStatus from 'http-status-codes';
import infoClient from '../models/infoClient.model';

/**
 * Find all the client
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
  infoClient
    .forge()
    .fetchAll()
    .then((client) =>
      res.json({
        error: false,
        data: client.toJSON()
      })
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
      })
    );
}

/**
 *  Find client by nit
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
  infoClient
    .forge({ nit: req.params.nit })
    .fetch()
    .then((client) => {
      if (!client) {
        res.status(HttpStatus.NOT_FOUND).json({
          error: true,
          data: {}
        });
      } else {
        res.json({
          error: false,
          data: client.toJSON()
        });
      }
    })
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
      })
    );
}

/**
 * Store new client
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
  const {
    nit,
    full_name,
    address,
    phone,
    city,
    state,
    country,
    credit_limit,
    available_credit,
    visit_percentage,
    visits
  } = req.body;

  infoClient
    .forge(
      {
        nit,
        full_name,
        address,
        phone,
        city,
        state,
        country,
        credit_limit,
        available_credit,
        visit_percentage,
        visits
      },
      { hasTimestamps: true }
    )
    .save()
    .then((infoClient) =>
      res.json({
        success: true,
        data: infoClient.toJSON()
      })
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
      })
    );
}

/**
 * Update client by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
  infoClient
    .forge({ nit: req.params.nit })
    .fetch({ require: true })
    .then((client) =>
      client
        .save({
          first_name: req.body.first_name || client.get('first_name'),
          last_name: req.body.last_name || client.get('last_name'),
          email: req.body.email || client.get('email')
        })
        .then(() =>
          res.json({
            error: false,
            data: client.toJSON()
          })
        )
        .catch((err) =>
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: true,
            data: { message: err.message }
          })
        )
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
      })
    );
}

/**
 * Destroy client by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
  infoClient
    .forge({ nit: req.params.id })
    .fetch({ require: true })
    .then((client) =>
      client
        .destroy()
        .then(() =>
          res.json({
            error: false,
            data: { message: 'Client deleted successfully.' }
          })
        )
        .catch((err) =>
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: true,
            data: { message: err.message }
          })
        )
    )
    .catch((err) =>
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
      })
    );
}
