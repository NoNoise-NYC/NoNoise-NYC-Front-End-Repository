export class PostModel {
    profilePhoto: string;
    name: string;
    date: string;
    postText: string;
    postPhoto: string;
    likeCount: number;

    constructor(profilePhoto: string, name: string, date: string, postText: string, postPhoto: string, likeCount: number) {
        this.profilePhoto = profilePhoto;
        this.name = name;
        this.date = date;
        this.postText = postText;
        this.postPhoto = postPhoto;
        this.likeCount = likeCount;
    }
}
