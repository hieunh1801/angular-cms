import * as mongoose from 'mongoose';
import { IContentDocument, IContent, ContentSchema } from '../../content/content.model';

export interface IMedia extends IContent {
    mimeType: string;
    size: number;
    thumbnail: string;
}

export interface IMediaDocument extends IMedia, IContentDocument { }

export const ImageContent = 'ImageContent';
export const VideoContent = 'VideoContent';
export const FileContent = 'FileContent';

export const cmsMedia = 'cms_Media';
export const MediaSchema = new mongoose.Schema({
    ...ContentSchema.obj,

    mimeType: { type: String, required: false },
    size: { type: Number, required: false },
    thumbnail: { type: String, required: false },

    parentId: { type: mongoose.Schema.Types.ObjectId, ref: cmsMedia }
}, { timestamps: true });

export const MediaModel: mongoose.Model<IMediaDocument> = mongoose.model<IMediaDocument>(cmsMedia, MediaSchema);