import { Meteor } from 'meteor/meteor';
import { populateEquipment } from './import-items';
import { ItemsCollection } from '../imports/api/items';

function insertLink(title: string, url: string) {
  ItemsCollection.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  populateEquipment();

  // // If the Links collection is empty, add some data.
  // if (LinksCollection.find().count() === 0) {
  //   insertLink(
  //     'Do the Tutorial',
  //     'https://www.meteor.com/tutorials/react/creating-an-app'
  //   );

  //   insertLink(
  //     'Follow the Guide',
  //     'http://guide.meteor.com'
  //   );

  //   insertLink(
  //     'Read the Docs',
  //     'https://docs.meteor.com'
  //   );

  //   insertLink(
  //     'Discussions',
  //     'https://forums.meteor.com'
  //   );
  // }
});
