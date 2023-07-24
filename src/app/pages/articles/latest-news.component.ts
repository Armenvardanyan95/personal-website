import { Component, OnInit } from '@angular/core';
import { ChatGPTService } from 'src/app/common/services/chatgpt.service';
import { Article } from 'src/app/common/types/article.type';
import { Podcast } from 'src/app/common/types/podcast.type';
import articles from '../../../assets/content/articles.json';
import podcasts from '../../../assets/content/podcasts.json';

@Component({
    selector: 'app-latest-news',
    template: ``,
    styles: [``],
    standalone: true,
})
export class LatestNewsComponent implements OnInit {
    latestItem!: {type: 'podcast', item: Podcast} | {type: 'article', item: Article};

    constructor(
        private readonly chatgpt: ChatGPTService,
    ) {}

    ngOnInit() {
        this.getLatestItem();
    }

    getLatestItem() {
        const [latestPodcast] = podcasts as Podcast[];
        const [latestArticle] = articles as Article[];
        this.latestItem = new Date(latestPodcast.date) > new Date(latestArticle.date) ?
                             {type: 'podcast', item: latestPodcast} :
                             {type: 'article', item: latestArticle};

        this.getLatestItemText();
    }

    async getLatestItemText() {
        const prompt = `
        Describe this json in a human readable format, as short text announcing news about new content. 
        Here I ${this.latestItem.type === 'article' ? 'wrote an article' : 'was part of a podcast episode'} and want it announced
        as my latest activity. Use mildly exciting language nothing too much, maybe emojis. Return me an html string containing 
        that announcement so that I can use it as "innerHTML" in my Angular app. l,inks must have "target"_blank"" set. return ONLY the html string. Here is the json:

        ${JSON.stringify(this.latestItem.item)}
        `;
        const result = await this.chatgpt.runCompletion(prompt);
        console.log(result);
    }
}