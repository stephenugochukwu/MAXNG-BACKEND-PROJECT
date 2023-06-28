import db from "../config/dbConfig.js";
import ip from "ip";

export const newComment = async (payload: Record<string, any>) => {
  try {
    const response = await db.comment.create({
      data: {
        ipAddress: ip.address(),
        text: payload.text,
        filmId: payload.filmId,
      },
    });
    return { statusCode: 201, message: response };
  } catch (error) {
    console.error(error);
    throw { statusCode: 500, message: error };
  }
};

export const getComments = async (filmId: number) => {
  try {
    const comments = await db.comment.findMany({
      where: {
        filmId,
      },
    });
    return { statusCode: 200, message: comments };
  } catch (error) {
    console.error(error);
    throw { statusCode: 500, message: error };
  }
};
export const listComments = async () => {
  try {
    const comments = await db.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return { statusCode: 200, message: comments };
  } catch (error) {
    console.error(error);
    throw { statusCode: 500, message: error };
  }
};
