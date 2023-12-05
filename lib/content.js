import fs from "fs";
import matter from "gray-matter";

const blogsFolder = "content/blogs/";
const samplesFolder = "content/samples/";

export const getBlogMetadata = () => {
    const folder = blogsFolder;
    const files = fs.readdirSync(folder);
    const markdownBlogs = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    const blogs = markdownBlogs.map((fileName) => {
        const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            brief: matterResult.data.brief,
            image: matterResult.data.image,
            date: matterResult.data.date,
            slug: fileName.replace(".md", ""),
        };
    });

    return blogs;
};

export const getSampleMetadata = () => {
    const folder = samplesFolder;
    const files = fs.readdirSync(folder);
    const markdownSamples = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    const samples = markdownSamples.map((fileName) => {
        const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            preview: matterResult.data.preview,
            topic: matterResult.data.topic,
            views: matterResult.data.views,
            downloads: matterResult.data.downloads,
            pages: matterResult.data.pages,
            words: matterResult.data.words,
            slug: fileName.replace(".md", ""),
        };
    });

    return samples;
};

export const getSampleContent = (slug) => {
  const folder = samplesFolder;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const getBlogContent = (slug) => {
  const folder = blogsFolder
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
