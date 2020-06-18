import { User, UserQuries } from './Query/user';
import { Note, NoteQuries } from './Query/note';

import  { Auth } from './Mutation/auth';
import { NoteSub }  from './Subscription/note';

export default {
  Query: {
    ...UserQuries,
    ...NoteQuries,
  },
  Mutation: {
    ...Auth,
  },
  Subscription: {
    ...NoteSub,
  },
  User,
  Note,
};
