import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['BusinessOwner'];
  const roles = ['BusinessOwner', 'BusinessOwner', 'TeamMember', 'Manager'];
  const applicationName = 'ConstructFlow';
  const tenantName = 'organization';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Role: TeamMember

1. As a TeamMember, I want to be able to log in to the ConstructFlow application so that I can access my assigned tasks and project information.

2. As a TeamMember, I want to be able to update my task progress in real-time so that my manager and other team members can track the progress of the project.

3. As a TeamMember, I want to be able to view my work schedule and attendance so that I can plan my work accordingly and ensure I am meeting my required hours.

4. As a TeamMember, I want to be able to communicate with my team members, manager, and other stakeholders through the application so that I can collaborate effectively and resolve any issues that may arise.

5. As a TeamMember, I want to be able to access project documentation, such as blueprints and compliance documents, so that I can ensure my work is in line with project requirements and regulations.

Role: Manager

1. As a Manager, I want to be able to log in to the ConstructFlow application so that I can oversee all my construction projects and manage my team members.

2. As a Manager, I want to be able to view real-time progress updates on all my projects so that I can make data-driven decisions and ensure projects stay on track.

3. As a Manager, I want to be able to monitor equipment usage and staff scheduling to optimize resource allocation and reduce costs.

4. As a Manager, I want to be able to use AI and machine learning features to predict potential delays and cost overruns so that I can proactively address these issues and keep projects on time and within budget.

5. As a Manager, I want to be able to communicate with my team members, contractors, architects, and clients through the application so that I can ensure seamless collaboration and address any concerns or issues that may arise.

6. As a Manager, I want to be able to access and manage compliance documentation for all my projects so that I can ensure all work is being done according to regulations and avoid any potential legal issues.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
