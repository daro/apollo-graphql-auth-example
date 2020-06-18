import apollo from 'apollo-server-express';
const { AuthenticationError } = apollo;

export const User = {
  notes: (parent, args, ctx) =>
    ctx.db.notes.filter(note => note.authorId === parent.id),
};

export const UserQuries = {
  users: (parent, args, ctx) => ctx.db.users,

  me(parent, args, ctx) {
    if (!ctx.user.id) {
      throw new AuthenticationError('No user logged in');
    }
    console.log(user) 
    return ctx.db.users.find(user => user.id === ctx.user.id);
  },
};

