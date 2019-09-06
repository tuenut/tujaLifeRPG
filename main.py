import zerorpc

from datetime import datetime as dt
from character import Character


class ManagerRPC(object):
    def __init__(self):
        self.__character = None

    def create_character(self, name):
        if self.__character is None:
            self.__character = Character(name)
            return self.__character.name
        else:
            raise Exception("Character already exists!")

    def get_active_quests(self):
        return self.__character.active_quests

    def create_quest(self, title, **kwargs):
        self.__character.create_quest(title, **kwargs)
        return True

    def get_quest_collection(self):
        return self.__character.quests_collection

s = zerorpc.Server(ManagerRPC())
s.bind("tcp://127.0.0.1:4242")
s.run()