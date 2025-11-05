import * as prompts from '@clack/prompts';
import path, { dirname } from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import chalk from 'chalk';

const __dirname = dirname(fileURLToPath(import.meta.url));

function createFrontMatter(title: string, tags: string) {
  const tagArray = tags
    ? tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];
  const formattedTags = tagArray.map((tag) => `"${tag}"`).join(', ');

  return `---
title: "${title}"
description: ""
thumbnail: ""
tags: [${formattedTags}]
createdAt: "${new Date().toISOString()}"
---
`;
}

async function init() {
  prompts.intro(`
    ██╗     ███████╗ ██████╗        ██████╗ ██╗      ██████╗  ██████╗
    ██║     ██╔════╝██╔═══██╗       ██╔══██╗██║     ██╔═══██╗██╔════╝
    ██║     █████╗  ██║   ██║       ██████╔╝██║     ██║   ██║██║  ███╗
    ██║     ██╔══╝  ██║   ██║       ██╔══██╗██║     ██║   ██║██║   ██║
    ███████╗███████╗╚██████╔╝██╗    ██████╔╝███████╗╚██████╔╝╚██████╔╝
    ╚══════╝╚══════╝ ╚═════╝ ╚═╝    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝
                       *~ Welcome to Leo's Blog ~*
    `);

  const type = await prompts.select({
    message: '작성할 포스트 유형을 선택해주세요.',
    options: [
      { value: 'article', label: chalk.yellow('기술 포스트') },
      { value: 'book', label: chalk.cyan('독서 리뷰') },
      { value: 'problem-solving', label: chalk.magenta('알고리즘 풀이') },
    ],
  });

  if (prompts.isCancel(type)) {
    prompts.cancel('포스트 템플릿 CLI를 종료합니다.');
    process.exit(0);
  }

  if (type === 'article' || type === 'book') {
    const group = await prompts.group(
      {
        title: () =>
          prompts.text({
            message: '포스트 제목을 입력해주세요.',
            validate(value) {
              if (!value.length) return '포스트 제목의 입력이 필요합니다!';
            },
          }),
        slug: () =>
          prompts.text({
            message: '포스트 파일명을 입력해주세요.',
            placeholder: 'growing-together',
            validate(value) {
              if (!value.length) return '포스트 파일명의 입력이 필요합니다!';
            },
          }),
        tags: () =>
          prompts.text({
            message: '포스트 태그를 입력해주세요.',
            placeholder: 'Frontend, ... (쉽표로 구분)',
            initialValue: '',
          }),
      },
      {
        onCancel: () => {
          prompts.cancel('포스트 템플릿 CLI를 종료합니다.');
          process.exit(0);
        },
      }
    );

    if (type === 'article') {
      const frontMatter = createFrontMatter(group.title, group.tags);

      const templatePath = path.join(__dirname, 'templates', 'article.mdx');
      const templateContent = fs.readFileSync(templatePath, 'utf-8');

      const fileContent = frontMatter + '\n' + templateContent;

      const filePath = path.join(
        __dirname,
        '..',
        '__contents',
        'articles',
        `${group.slug}.mdx`
      );

      fs.writeFileSync(filePath, fileContent, 'utf-8');

      prompts.outro(`✅ Article 템플릿이 성공적으로 생성되었습니다!`);
    }

    if (type === 'book') {
      const frontMatter = createFrontMatter(group.title, group.tags);

      const templatePath = path.join(__dirname, 'templates', 'book.mdx');
      const templateContent = fs.readFileSync(templatePath, 'utf-8');

      const fileContent = frontMatter + '\n' + templateContent;

      const filePath = path.join(
        __dirname,
        '..',
        '__contents',
        'books',
        `${group.slug}.mdx`
      );

      fs.writeFileSync(filePath, fileContent, 'utf-8');

      prompts.outro(`✅ Book 템플릿이 성공적으로 생성되었습니다!`);
    }
  }

  if (type === 'problem-solving') {
    const group = await prompts.group(
      {
        platform: () =>
          prompts.select({
            message: '알고리즘 풀이를 진행한 플랫폼을 선택해주세요.',
            options: [
              { value: 'baekjoon', label: chalk.blue('백준') },
              { value: 'leetCode', label: chalk.yellow('LeetCode') },
            ],
          }),
        problemId: () =>
          prompts.text({
            message: '문제의 식별자를 입력해주세요.',
          }),
        problemName: () =>
          prompts.text({
            message: '문제 이름을 입력해주세요.',
          }),
        tags: () =>
          prompts.text({
            message: '포스트 태그를 입력해주세요.',
            placeholder: 'Baekjoon, LeetCode, ... (쉽표로 구분)',
            initialValue: '',
          }),
      },
      {
        onCancel: () => {
          prompts.cancel('포스트 템플릿 CLI를 종료합니다.');
          process.exit(0);
        },
      }
    );

    const templatePath = path.join(
      __dirname,
      'templates',
      'problem-solving.mdx'
    );
    let templateContent = fs.readFileSync(templatePath, 'utf-8');

    templateContent = templateContent
      .replace(/문제번호/g, group.problemId)
      .replace(/문제명/g, group.problemName);

    const title =
      group.platform === 'baekjoon'
        ? `백준 ${group.problemId} - ${group.problemName}`
        : `LeetCode - ${group.problemName}`;

    const frontMatter = createFrontMatter(title, group.tags);

    const fileName =
      group.platform === 'baekjoon'
        ? `boj-${group.problemId}.mdx`
        : `leet-${group.problemId}.mdx`;
    const fileContent = frontMatter + '\n' + templateContent;

    const filePath = path.join(
      __dirname,
      '..',
      '__contents',
      'problem-solving',
      fileName
    );

    fs.writeFileSync(filePath, fileContent, 'utf-8');

    prompts.outro(`✅ Problem-solving 템플릿이 성공적으로 생성되었습니다!`);
  }
}

init().catch((e) => {
  console.error(e);
});
