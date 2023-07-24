import Job from '../models/Job';
import Category from '../models/category';
import dbconn from '../mongoConn';
import NextAuth from 'next-auth/next';
import { Options } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  await dbconn();
  const { method } = req;

  switch (method) {
    case 'POST': {
      try {
        const category = await Category.findById(req.body.category);

        if (!category) {
          return res.status(400).json({ message: "Category does not exist" });
        }
        const job = await Job.create({...req.body});
        if (!job) {
          return res.status(400).json({ message: 'Please provide all necessary data' });
        }
        return res.status(200).json(job);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }

    case 'GET': {
      const { categories } = req.query;
      let filter = {};
      try {
        if (categories) {
          filter = { category: { $in: categories.split(',') } };
          const jobs = await Job.find(filter).populate('category');
          if (!jobs) {
            return res.status(400).json({ message: "No Jobs found" });
          }
          return res.status(200).json(jobs);
        } else {
          const jobs = await Job.find().populate('category');
          if (!jobs) {
            return res.status(400).json({ message: "No data found" });
          }
          return res.status(200).json(jobs);
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }

    default:
      return res.status(404).json({ message: 'Not found' });
  }
}
