---
title: M1 MacBook 초기 세팅하기
description: 이 글에서는 최근에 회사에서 지급 받은 M1 MacBook Pro를 초기 세팅하면서 겪었던 병목을 다시 겪지 않고자 세팅 내용을 간단히 정리합니다.
thumbnail:
tags: ['Tool']
createdAt: 2022-09-12T11:24:42.219Z
---

> ## TL;DR
>
> - **MacOS 설정 및 커스터마이징**: MacOS의 시스템 설정을 사용자에 맞게 조정하고, Iterm2에 Dracula 테마와 Fira Code 폰트를 적용하였습니다.
> - **Homebrew 및 필수 패키지 설치**: Homebrew를 설치하여 필요한 소프트웨어를 쉽게 관리하고, Node, Yarn, NVM과 같은 필수 개발 도구를 설치하였습니다.
> - **Oh My Zsh 및 플러그인 설치**: Oh My Zsh를 설치하고, autojump, zsh-syntax-highlighting, zsh-autosuggestions 플러그인을 추가하여 Zsh 셸을 커스터마이징하였습니다.

## MacOS 설정

- `General`

  - `Appearance` : Dark로 변경
  - `Accent color` : Pink로 변경

- `Desktop & Screen Saver`

  - `Show screen saver after` : 1시간으로 변경

- `Dock & Menu Bar`

  - `Size` : 25%로 변경
  - `Magnification` : Max로 변경
  - `Show recent applications in Dock` : 해제

- `Keyboard`

  - `Keyboard` - `Key Repeat` : 100% 변경
  - `Shorcuts` - `Spotlight` : 모두 해제 (Alfred 사용)
  - `Input Sources` - `Caps Lock key to switch to and from ABC` : 해제

- `Trackpad`

  - `Tracking speed` : 100% 변경

- `Battery`
  - `Power Adapter` : 디스플레이 끄기 1시간으로 변경

## Homebrew

[Homebrew](https://brew.sh/index_ko)는 패키지들을 쉽게 관리할 수 있도록 도와주는 Mac용 패키지 매니저입니다.

### 설치

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Iterm2

[Iterm2](https://iterm2.com/) 는 MacOS에서 기본으로 제공하는 터미널보다 훨씬 많은 기능을 제공하는 터미널 애플리케이션입니다.

### 설치

```shell
brew install iterm2
```

### 로제타 전용으로 복제(필요 시)

Iterm2가 M1에 완전하게 호환되지 않는 경우를 대비해서 Iterm2를 복제하고 로제타로 실행해서 사용합니다.

1. `Finder` - `Applications` 에서 Iterm을 우클릭 후에 `Duplicate`합니다.
2. 복제한 Iterm의 이름을 Iterm Rosetta로 변경합니다.
3. Iterm Rosetta를 우클릭 후에 `Get info` 합니다.
4. `Open using Rosetta` 를 체크합니다.
5. Iterm Rosetta를 메인으로 사용합니다.

### 테마 적용

1. Dracula 테마 프리셋을 다음 명령어로 다운로드합니다.

```shell
git clone https://github.com/dracula/iterm.git
```

2. 다운 받은 `Dracula.itermcolors` 을 실행해서 `import`합니다.
3. `Preference` - `Profile`
   - `Colors` 에서 `Color Presets` 를 Dracula로 변경합니다.
   - `Window` 에서 `Blur` 체크 후 25로 변경하고 `Transparency` 를 30으로 변경합니다.

### 폰트 적용

1. Fira Code 폰트를 [GitHub 페이지](https://github.com/tonsky/FiraCode)에서 다운로드합니다.
2. 다운 받은 Fira Code를 설치합니다.
3. `Preference` - `Profile`
   - `Text`에서 `Font`를 Fira Code로 변경합니다.

## Oh My Zsh

[Oh My Zsh](https://ohmyz.sh/)는 Zsh를 쉽게 관리해주는 커뮤니티 기반 프레임워크입니다. 이는 다양한 플러그인과 테마를 사용할 수 있도록 도와줍니다.

### 설치

`Oh My Zsh`를 다음 명령어로 설치합니다.

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 플러그인 설치

#### autojump

autojump 플러그인을 다음 명령어로 설치합니다.

```shell
brew install autojump
```

설치 후에 `~/.zshrc`의 plugins에 autojump를 추가합니다.

```shell
plugins=(git autojump)
```

#### zsh-syntax-highlighting

syntax-highlighting 플러그인을 다음 명령어로 설치합니다.

```shell
brew install zsh-syntax-highlighting
```

설치 후에 `~/.zshrc`의 최하단에 다음 코드를 추가합니다.

```shell
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

#### zsh-autosuggestions

zsh-autosuggestions 플러그인을 다음 명령어로 설치합니다.

```shell
brew install zsh-autosuggestions
```

설치 후에 `~/.zshrc`의 최하단에 다음 코드를 추가합니다.

```shell
source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
```

## Karabiner

[Karabiner](https://karabiner-elements.pqrs.org/)는 손쉽게 키 맵핑을 커스터마이징할 수 있는 애플리케이션입니다. [커뮤니티](https://ke-complex-modifications.pqrs.org/)에서 제공하는 프리셋으로 쉽게 원하는 조합을 세팅할 수 있습니다.

### 설치

```sh
brew install karabiner-elements
```

### 세팅

저는 Vim을 사용하기 때문에 다음과 같은 프리셋과 설정을 사용합니다.

- `CAPS_LOCK to Hyper/Escape & Hyper + VIM Navigation keys`
- `Vimode with smart caps`
- `For Korean`
- `For Korean PC Keyboard`
- `F4` 를 `Launchpad` 로 변경

## 주요 패키지들

### Node

```shell
## 설치
brew install node

## 버전 확인
node -v
```

### Yarn

```shell
## 설치 (이미 설치한 node 제외 옵션)
brew install yarn --ignore-dependencies

## 버전 확인
yarn -v
```

### NVM

NVM을 다음 명령어로 설치합니다.

```shell
brew install nvm
```

NVM을 위한 디렉토리를 생성합니다.

```shell
mkdir ~/.nvm
```

`~/.zshrc` 의 최하단에 다음 코드를 추가합니다.

```shell
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

정상적으로 설치 되었는지 확인합니다.

```shell
nvm -version
```

## 주요 애플리케이션들

```shell
brew install <필요한 애플리케이션>
```

다음은 제가 주로 사용하는 애플리케이션 목록입니다.

- visual-studio-code
- alfred
- chrome
- firefox
- notion
- figma
- sourcetree
- slack
- obsidian
- app cleaner
- spectacle
- runcat
