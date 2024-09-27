// src/app/projects/dungeons-and-dragons/page.tsx

"use client";

import React from 'react';
import Grid from '@mui/material/Grid2';
import { Container, Typography, Button, useTheme, Card } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DND from '@/assets/images/oisah.jpg'
export default function ProjectOnePage() {
  const theme = useTheme();


  return (
    <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="lg" sx={{ pt: 12, pb: 6 }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 2,
              height: "100%",
              boxShadow: 5,
              borderRadius: 3,
              backgroundColor: "background.paper",
              cursor: "default",
            }}
          >
            <Grid container spacing={0}>
              <Grid size={9} xs={12} md={6}>
                <Typography variant="h3" component="h1" gutterBottom>
                  Dungeon Master for D&D Campaign
                </Typography>
              </Grid>
              <Grid
                item
                size={3}
                style={{ display: "flex" }}
                justifyContent="flex-end"
              >
                <Button
                  component={Link}
                  href="/projects"
                  variant="outlined"
                  size="medium"
                  sx={{ textTransform: "none", maxHeight: "50px" }}
                >
                  Back to Projects
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={6} alignItems="center" sx={{ pt: 2 }}>
              <Grid size={6} xs={12} md={6}>
                <Typography variant="body" paragraph>
                  When I was 16, I was apart of the youth group at my church and
                  this cute girl Liv, my now fiancée, introduced me (and our
                  friends) to a game called Dungeons and Dragons (D&D). The game
                  was growing in popularity from the show Stranger Things and
                  Liv was raving about it. Eventually we played D&D 5th Edition
                  one night at a youth group event and I was hooked...
                  adventures, magic, loot, and of course DRAGONS. From that
                  point on I had been writing stories and creating worlds for my
                  friends and players to interact with. This role is called the
                  "Dungeon Master" (DM).
                </Typography>
                <Typography variant="body1" paragraph>
                  As a DM you have to present a world to players and guide them
                  through the imaginative tale that they experience. This role
                  pushes you to be a leader, be creative, and a great
                  improviser. Playing in 5th edition, I have to know the ins and
                  outs of the rule set and help guide my players through the
                  different encounters they might experience. There have been
                  many moments while playing when the players in the campaign
                  take a huge turn that I was not expecting. In turn, I had to
                  continue to drive the story and improvise my way through
                  encounter after encounter. It is a daunting task, and not for
                  everyone, but it is one of the many ways I am able to express
                  myself creatively.
                </Typography>
                <Typography variant="body1" paragraph>
                  In the current game I am running, I have my players set in the
                  world of Oisah, located on the continent Azurinth (if you
                  can't tell yet, I'm a nerd). Throughout this continent there
                  is the Azurean Empire, where a set of 7 council members are
                  ruling the continent and its peoples. But with any government
                  there is conflict. A magical plague struck the land, causing
                  people to lose their magical abilities, whilst also striking a
                  huge famine that spans the entire continent. Due to this
                  plague, tensions are high within the council, with two of the
                  council members feuding, stirring up a possible civil war in
                  the continent. But despite this, our players are within the
                  Celestial Conclave, a guild known for their grand adventurers,
                  heroes, and gods. The player's main mission is to figure out
                  what may have caused the plague to happen, while also figuring
                  out the death of one of the council members, Kaelen
                  Silverleaf, and hopefully defeating a cult, The Withering
                  Hand, to save the continent of Azurinth.
                </Typography>
              </Grid>
              <Grid size={6} xs={12} md={6}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {
                    <Image
                      src={DND}
                      alt="Continent of Azurinth"
                      width={500}
                      height={500}
                      quality={50}
                    />
                  }
                </motion.div>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </motion.div>
    </div>
  );
}
