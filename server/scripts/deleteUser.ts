import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteUser = async () => {
  try {
    const userId = 31; 

    await prisma.user.delete({
      where: { id: userId },
    });

    console.log(`User with ID ${userId} deleted.`);
  } catch (error) {
    console.error('Failed to delete user:', error);
  } finally {
    await prisma.$disconnect();
  }
};

deleteUser();
