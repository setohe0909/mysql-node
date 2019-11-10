import Joi from 'joi';

export default {
  storeUser: {
    body: {
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .required()
    }
  },

  updateUser: {
    body: {
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .required()
    },
    params: {
      userId: Joi.string()
        .hex()
        .required()
    }
  },

  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },

  storeClient: {
    body: {
      full_name: Joi.string().required(),
      address: Joi.string().required(),
      phone: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      country: Joi.string().required(),
      credit_limit: Joi.number().required(),
      available_credit: Joi.number().required(),
      visit_percentage: Joi.number().required(),
      visits: Joi.number().required()
    }
  }
};
